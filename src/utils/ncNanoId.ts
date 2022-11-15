import { nanoid } from 'nanoid';

export default function ncNanoId(prefix = 'ncmaz_') {
  return prefix + nanoid() + '_';
}
