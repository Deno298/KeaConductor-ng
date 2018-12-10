import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-conduct",
  templateUrl: "./conduct.component.html",
  styleUrls: ["./conduct.component.scss"]
})
export class ConductComponent implements OnInit {

  speedCommandArray: string[] = ['079', '074', '067', '096', '099', '106', '111'];
  speedUrl = "http://192.168.43.195/";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        'train',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/train.svg'));
      this.matIconRegistry.addSvgIcon(
        'train-sound-on',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/cargo.svg'));
      this.matIconRegistry.addSvgIcon(
        'light-on',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/lightbulb-on.svg'));
      this.matIconRegistry.addSvgIcon(
        'light-off',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/light-off.svg'));
      this.matIconRegistry.addSvgIcon(
        'green-light',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/traffic-light-in-green.svg'));
      this.matIconRegistry.addSvgIcon(
        'red-light',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/traffic-light-in-red.svg'));
      this.matIconRegistry.addSvgIcon(
        'straight-track',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/tube-rail.svg'));
      this.matIconRegistry.addSvgIcon(
        'turning-track',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/rail.svg'));
      this.matIconRegistry.addSvgIcon(
        'bell-on',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/alarm.svg'));
      this.matIconRegistry.addSvgIcon(
        'bell-off',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sound-off.svg'));
      this.matIconRegistry.addSvgIcon(
        'horn1-on',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/speaker.svg'));
      this.matIconRegistry.addSvgIcon(
        'horn1-off',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/mute.svg'));
      this.matIconRegistry.addSvgIcon(
        'horn2-on',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/speaker-off.svg'));
      this.matIconRegistry.addSvgIcon(
        'horn2-off',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/volume-off.svg'));
    }

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

    $("#speed-slider").click(() => {
      const speedValue = $("#speed-slider").val();
      console.log(speedValue);
    });

    $("#loko-sound-off").click(() => {
      const url = baseUrl + "003/001/130";
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

    // --------------------------------------------------------------------------------

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
      const url = baseUrl + "003/002/130";
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

  onInputChange(event: any) {
    const speedCommand = event.value;
    console.log(this.speedCommandArray[speedCommand]);
    const fullUrl = this.speedUrl + '002/001/' + this.speedCommandArray[speedCommand];
    console.log(fullUrl);

    $.get(fullUrl, () => {});
  }
}
