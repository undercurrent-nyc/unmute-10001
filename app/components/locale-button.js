import Component from '@glimmer/component';
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class LocaleButtonComponent extends Component {
  @service intl;
  
  @action setLocale() {
    this.intl.setLocale([this.args.locale]);
  }
}
