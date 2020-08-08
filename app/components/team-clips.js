import Component from '@glimmer/component';

export default class TeamClipsComponent extends Component {

  clipsWithDummies = [];

  get clips() {
    if(!this.args.dummies) {
      return this.args.clips
    }

    let limit = 3
    const clips = this.args.clips.toArray();

    clips.length > 3 ? limit = clips.length : limit;

    for(let i = 0; i <= limit; i += 1) {

      this.insertDummy(i);
      this.insertDummy(i);

      if(i < clips.length) {
        this.clipsWithDummies.push(clips[i]);
      }

    }

    return this.clipsWithDummies;
  }

  insertDummy(i) {
    let color = "white";
    if(Math.random() <= 0.5){
      color = "black";
    }

    if(Math.random() < 1/(2 + i)){
      this.clipsWithDummies.push({
        dummy: true,
        color
      });
    }
  }

}
