import Component from '@glimmer/component';

export default class ArtistsBlockComponent extends Component {

  get artists() {
    const artists = this.args.artists.toArray().entries();
    return ["dummy", "dummy", "dummy", "dummy"]
      .concat(this.args.artists.toArray());
  }

}
