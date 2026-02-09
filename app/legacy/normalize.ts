// @ts-nocheck
import { ensureArray, ensureArrayOr } from './utils';

export function normalizeProjects(list) {
  return (list || []).map(function (p) {
    const taskTypeSource = (p.taskType != null && p.taskType !== '') ? p.taskType : p.task;
    return {
      id: p.id,
      name: p.name || '',
      code: p.code || '',
      link: p.link || '',
      logo: p.logo || '',
      initial: (p.name && p.name.charAt(0)) ? p.name.charAt(0).toUpperCase() : '?',
      favorite: !!p.favorite,
      taskType: ensureArray(taskTypeSource),
      connectType: ensureArray(p.connectType),
      taskCost: p.taskCost != null ? p.taskCost : '0',
      taskTime: p.taskTime != null ? p.taskTime : '3',
      noActiveTasks: !!p.noActiveTasks,
      isNew: !!p.isNew,
      status: p.status || 'potential',
      statusDate: p.statusDate || '',
      rewardType: ensureArrayOr(p.rewardType, []),
      raise: p.raise || null,
      raiseCount: p.raiseCount != null ? p.raiseCount : 0,
      logos: Array.isArray(p.logos) ? p.logos : [],
      lastEdited: p.lastEdited || p.createdAt || Date.now(),
    };
  });
}
