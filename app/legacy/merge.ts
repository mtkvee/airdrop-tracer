import { normalizeProjects } from './normalize';
import type { CustomOption, LegacyPayload, Project } from './types';

export function mergeCustomOptions(
  localOptions: Record<string, CustomOption[]>,
  cloudOptions: Record<string, CustomOption[]>
): Record<string, CustomOption[]> {
  var merged: Record<string, CustomOption[]> = {};
  var ids: Record<string, boolean> = {};
  Object.keys(localOptions || {}).forEach(function (k) { ids[k] = true; });
  Object.keys(cloudOptions || {}).forEach(function (k) { ids[k] = true; });
  Object.keys(ids).forEach(function (id) {
    var byValue: Record<string, CustomOption> = {};
    var addAll = function (arr: CustomOption[] | undefined) {
      (arr || []).forEach(function (opt) {
        if (!opt || !opt.value) return;
        if (!byValue[opt.value]) byValue[opt.value] = opt;
      });
    };
    addAll(cloudOptions && cloudOptions[id]);
    addAll(localOptions && localOptions[id]);
    merged[id] = Object.keys(byValue).map(function (k) { return byValue[k]; });
  });
  return merged;
}

export function mergeProjects(localList: Project[], cloudList: Project[]): Project[] {
  var byId: Record<number, Project & { __source?: string }> = {};
  var addAll = function (list: Project[], source: string) {
    (list || []).forEach(function (p) {
      if (!p || p.id == null) return;
      if (!byId[p.id]) {
        byId[p.id] = p;
        byId[p.id].__source = source;
        return;
      }
      var existing = byId[p.id];
      var a = Number(existing.lastEdited || 0);
      var b = Number(p.lastEdited || 0);
      if (b >= a) {
        byId[p.id] = p;
        byId[p.id].__source = source;
      }
    });
  };
  addAll(cloudList, 'cloud');
  addAll(localList, 'local');
  return Object.keys(byId).map(function (k) {
    var p = byId[Number(k)];
    if (p && p.__source) delete p.__source;
    return p;
  });
}

export function mergePayloads(
  localPayload: LegacyPayload | Project[] | null | undefined,
  cloudPayload: LegacyPayload | Project[] | null | undefined
): LegacyPayload {
  var localObj = localPayload && !Array.isArray(localPayload) ? localPayload : null;
  var cloudObj = cloudPayload && !Array.isArray(cloudPayload) ? cloudPayload : null;
  var localList = Array.isArray(localPayload) ? localPayload : (localPayload && localPayload.projects) ? localPayload.projects : [];
  var cloudList = Array.isArray(cloudPayload) ? cloudPayload : (cloudPayload && cloudPayload.projects) ? cloudPayload.projects : [];
  var mergedProjects = mergeProjects(normalizeProjects(localList), normalizeProjects(cloudList));
  var mergedOptions = mergeCustomOptions(localObj && localObj.customOptions || {}, cloudObj && cloudObj.customOptions || {});
  var mergedUpdated = Math.max(Number(localObj && localObj.lastUpdatedAt || 0), Number(cloudObj && cloudObj.lastUpdatedAt || 0));
  var mergedBackupAt = Math.max(Number(localObj && localObj.lastAutoBackupAt || 0), Number(cloudObj && cloudObj.lastAutoBackupAt || 0));
  return {
    projects: mergedProjects,
    customOptions: mergedOptions,
    lastUpdatedAt: mergedUpdated,
    lastAutoBackupAt: mergedBackupAt,
    savedAt: Date.now(),
  };
}
