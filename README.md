## canActivate & canActiveChild
Reference: admin module

## canDeactivate
canDeactivate guard involves some logic before we trying to leave some certain route and destroy the component associated with it

Reference: admin module

## canLoad guard & Preloading Strategies
- canLoad guard works only with lazy load module
Reference: admin module

## resolver guard
Reference: UserComponent

## Multiple Router Outlets in Angular using Named Outlets
Reference: user management module

## Providers in Angular Route
Understanding more about Angular Injector Hierarchy
https://www.youtube.com/watch?v=3iSADIqLp2E&list=PLX7eV3JL9sflxg0fWgaWoz43Rx99bivmv&index=6

## Page title
custom strategy title
named route-outlet title

## canMatch
Disable or enable a route depending on some certain conditions
canMatch is a powerful replacement for the canLoad guard and according to the pull request for canMatch that canLoad guard can be deprecated in the future in favor of canMatch

The reason is canLoad has a couple of drawbacks
- canLoad is called only when you lazy load a module but not when you lazy load a standalone component

## Route navigation life cycle
route-navigation-life-cycle.png

## Component-Less and Empty-Path Routes
The idea behind this pattern is you have to just introduce a new route. This route has empty path and this route doesn't have component to render instead it has a property children.

## Notes
Angular router uses the first match win strategy