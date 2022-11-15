import { nanoid } from 'nanoid';

export default function tddNanoId(prefix = 'tdd_') {
  return prefix + nanoid() + '_';
}
