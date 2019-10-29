import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: "ns-catalogo-product",
  templateUrl: "./catalogo-product.component.html",
  styleUrls: ["./catalogo-product.component.css"]
})
export class CatalogoProductComponent implements OnInit {

  constructor() { }

  ngOnInit():void {
  }
 
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

}
