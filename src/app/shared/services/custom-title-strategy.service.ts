import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomTitleStrategyService extends TitleStrategy {
  constructor(private title: Title) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    // TODO: improve & refactor
    const detailsOutlet = snapshot.root.children[0]?.children[0]?.children.find((r) => r.outlet === 'details');

    let title = this.buildTitle(snapshot);

    console.log(detailsOutlet);

    if (detailsOutlet && detailsOutlet.routeConfig?.title) {
      title = `${title} - ${detailsOutlet.routeConfig?.title}`;
    }

    if (title) {
      this.title.setTitle(`App - ${title}`);
    }
  }
}