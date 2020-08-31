import Route from '@ember/routing/route';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
  @service metrics;

  @service router;

  constructor() {
    super(...arguments);

    let router = this.router;
    router.on("routeDidChange", () => {
      const page = router.currentURL;
      const title = router.currentRouteName || "Unknown";

      this.metrics.trackPage({ page, title });
    });
  }
}
