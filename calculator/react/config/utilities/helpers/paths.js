import path from 'path'
import { fileURLToPath } from 'url'

export const PATHS = {
  src: path.join(fileURLToPath(import.meta.url), '../../../../src'),
  dist: path.join(fileURLToPath(import.meta.url), '../../../../dist'),
  public: path.join(fileURLToPath(import.meta.url), '../../../../public')
}
