import Component from '@glimmer/component';

export default class TeamClipsComponent extends Component {

  get clips() {
    if(!this.args.dummies) {
      return this.args.clips
    }

    const clips = [];
    for(const [index, clip] of this.args.clips.toArray().entries()) {
      if(Math.random() < 1/(3 + index)){
        clips.push("dummy");
      }
      clips.push(clip);
    }

    return clips;
  }

}
