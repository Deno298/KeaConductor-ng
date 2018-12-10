import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-conduct",
  templateUrl: "./conduct.component.html",
  styleUrls: ["./conduct.component.scss"]
})
export class ConductComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const baseUrl = "http://192.168.43.195/";

    $("#straight-green").click(function() {
      const trackOrSignalNumber = $("#trackOrSignalInput").val();
      const fullUrl = baseUrl + "004/" + trackOrSignalNumber + "/001";

      $.get(fullUrl, (data, status) => {});
      $.get(fullUrl, (data, status) => {});
      $.get(fullUrl, (data, status) => {});
    });

    $("#turn-red").click(function() {
      const trackOrSignalNumber = $("#trackOrSignalInput").val();
      const fullUrl = baseUrl + "004/" + trackOrSignalNumber + "/000";

      $.get(fullUrl, (data, status) => {});
      $.get(fullUrl, (data, status) => {});
      $.get(fullUrl, (data, status) => {});
    });

    $("#set-loko-address").click(function() {
      const lokoaddress = $("#loko-address").val();
      const url = baseUrl + "001/001/" + lokoaddress;
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#loko-sound-on").click(() => {
      const url = baseUrl + "003/001/001";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#loko-sound-off").click(() => {
      const url = baseUrl + "003/001/030";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#bell-sound-on").click(() => {
      const url = baseUrl + "003/001/008";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#bell-sound-off").click(() => {
      const url = baseUrl + "003/001/123";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn1-sound-on").click(() => {
      const url = baseUrl + "003/001/002";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn1-sound-off").click(() => {
      const url = baseUrl + "003/001/129";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn2-sound-on").click(() => {
      const url = baseUrl + "003/001/004";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn2-sound-off").click(() => {
      const url = baseUrl + "003/001/127";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#lights-sound-on").click(() => {
      const url = baseUrl + "003/001/016";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#lights-sound-off").click(() => {
      const url = baseUrl + "003/001/115";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    //--------------------------------------------------------------------------------

    $("#set-loko-address1").click(function() {
      const lokoaddress = $("#loko-address1").val();
      const url = baseUrl + "001/002/" + lokoaddress;
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#loko-sound-on1").click(() => {
      const url = baseUrl + "003/002/001";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#loko-sound-off1").click(() => {
      const url = baseUrl + "003/002/030";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#bell-sound-on1").click(() => {
      const url = baseUrl + "003/002/008";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#bell-sound-off1").click(() => {
      const url = baseUrl + "003/002/123";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn1-sound-on1").click(() => {
      const url = baseUrl + "003/002/002";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn1-sound-off1").click(() => {
      const url = baseUrl + "003/002/129";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn2-sound-on1").click(() => {
      const url = baseUrl + "003/002/004";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#horn2-sound-off1").click(() => {
      const url = baseUrl + "003/002/127";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#lights-sound-on1").click(() => {
      const url = baseUrl + "003/002/016";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#lights-sound-off1").click(() => {
      const url = baseUrl + "003/002/115";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });
  }
}
