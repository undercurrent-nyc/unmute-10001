import Component from '@glimmer/component';

export default class TeamClipsComponent extends Component {

  clipsWithDummies = [];

  get clips() {
    if(!this.args.dummies) {
      return this.args.clips
    }

    this.clipsWithDummies = [];

    const clips = this.args.clips.toArray().reverse();

    for(let i = 0; i < clips.length; i += 1) {

      this.insertDummy(i);

      if(i < clips.length) {
        this.clipsWithDummies.push(clips[i]);
      }

    }

    return this.clipsWithDummies;
  }

  insertDummy(i) {
    let color = "white";

    if(Math.random() < 1/(2 + i)){
      this.clipsWithDummies.push({
        dummy: true,
        color
      });
    }
  }

}
