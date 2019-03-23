/**
 * Deprecated. This will be removed in the future.
 */
import {OUT_DIR} from './provider/provider';
import {OptionsBinary} from './cmds/options_binary';

export class Config {
  static getSeleniumDir() {
    return OUT_DIR;
  }
}


export function writeUpdateConfig(optionsBinary: OptionsBinary) {
  let files: string[] = [];
  if (optionsBinary.browserDrivers) {
    for (let browserDriver of optionsBinary.browserDrivers) {
      browserDriver.binary.getStatus();
    }
  }
  if (optionsBinary.server) {

  }
}