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
      const url = baseUrl + "003/001/101";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });

    $("#loko-sound-off").click(() => {
      const url = baseUrl + "003/001/001";
      console.log(url);
      $.get(url, () => {});
      $.get(url, () => {});
      $.get(url, () => {});
    });
  }
}
