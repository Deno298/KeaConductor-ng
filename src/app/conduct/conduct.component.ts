import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-conduct",
  templateUrl: "./conduct.component.html",
  styleUrls: ["./conduct.component.scss"]
})
export class ConductComponent implements OnInit {

  speedCommandArray: string[] = ['079', '074', '067', '096', '099', '106', '111'];
  speedUrl = "http://192.168.43.195/";

  requestSender(url) {
    console.log(url);
    $.get(url, () => {});
    $.get(url, () => {});
    $.get(url, () => {});
    $.get(url, () => {});
    $.get(url, () => {});
  }

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
      this.requestSender(fullUrl);
    });

    $("#turn-red").click(function() {
      const trackOrSignalNumber = $("#trackOrSignalInput").val();
      const fullUrl = baseUrl + "004/" + trackOrSignalNumber + "/000";
      this.requestSender(fullUrl);
    });

    $("#set-loko-address").click(function() {
      const lokoaddress = $("#loko-address").val();
      const fullUrl = baseUrl + "001/001/" + lokoaddress;
      this.requestSender(fullUrl);
    });

    $("#loko-sound-on").click(() => {
      const fullUrl = baseUrl + "003/001/001";
      this.requestSender(fullUrl);

    });

    $("#speed-slider").click(() => {
      const speedValue = $("#speed-slider").val();
      console.log(speedValue);
    });

    $("#loko-sound-off").click(() => {
      const fullUrl = baseUrl + "003/001/254";
      this.requestSender(fullUrl);
    });

    $("#bell-sound-on").click(() => {
      const fullUrl = baseUrl + "003/001/008";
      this.requestSender(fullUrl);

    });

    $("#bell-sound-off").click(() => {
      const fullUrl = baseUrl + "003/001/247";
      this.requestSender(fullUrl);

    });

    $("#horn1-sound-on").click(() => {
      const fullUrl = baseUrl + "003/001/002";
      this.requestSender(fullUrl);
    });

    $("#horn1-sound-off").click(() => {
      const fullUrl = baseUrl + "003/001/253";
      this.requestSender(fullUrl);

    });

    $("#horn2-sound-on").click(() => {
      const fullUrl = baseUrl + "003/001/004";
      this.requestSender(fullUrl);

    });

    $("#horn2-sound-off").click(() => {
      const fullUrl = baseUrl + "003/001/251";
      this.requestSender(fullUrl);

    });

    $("#lights-sound-on").click(() => {
      const fullUrl = baseUrl + "003/001/016";
      this.requestSender(fullUrl);
    });

    $("#lights-sound-off").click(() => {
      const fullUrl = baseUrl + "003/001/239";
      this.requestSender(fullUrl);
    });

    // --------------------------------------------------------------------------------

    $("#set-loko-address1").click(function() {
      const lokoaddress = $("#loko-address1").val();
      const fullUrl = baseUrl + "001/002/" + lokoaddress;
      this.requestSender(fullUrl);
    });

    $("#loko-sound-on1").click(() => {
      const fullUrl = baseUrl + "003/002/001";
      this.requestSender(fullUrl);
    });

    $("#loko-sound-off1").click(() => {
      const fullUrl = baseUrl + "003/002/254";
      this.requestSender(fullUrl);
    });

    $("#bell-sound-on1").click(() => {
      const fullUrl = baseUrl + "003/002/008";
      this.requestSender(fullUrl);
    });

    $("#bell-sound-off1").click(() => {
      const fullUrl = baseUrl + "003/002/247";
      this.requestSender(fullUrl);
    });

    $("#horn1-sound-on1").click(() => {
      const fullUrl = baseUrl + "003/002/002";
      this.requestSender(fullUrl);
    });

    $("#horn1-sound-off1").click(() => {
      const fullUrl = baseUrl + "003/002/253";
      this.requestSender(fullUrl);
    });

    $("#horn2-sound-on1").click(() => {
      const fullUrl = baseUrl + "003/002/004";
      this.requestSender(fullUrl);
    });

    $("#horn2-sound-off1").click(() => {
      const fullUrl = baseUrl + "003/002/251";
      this.requestSender(fullUrl);
    });

    $("#lights-sound-on1").click(() => {
      const fullUrl = baseUrl + "003/002/016";
      this.requestSender(fullUrl);
    });

    $("#lights-sound-off1").click(() => {
      const fullUrl = baseUrl + "003/002/239";
      this.requestSender(fullUrl);
    });
  }

  onInputChange(event: any) {
    const speedCommand = event.value;
    console.log(this.speedCommandArray[speedCommand]);
    const fullUrl = this.speedUrl + '002/001/' + this.speedCommandArray[speedCommand];
    console.log(fullUrl);

    this.requestSender(fullUrl);
  }

  onInputChange1(event: any) {
    const speedCommand = event.value;
    console.log(this.speedCommandArray[speedCommand]);
    const fullUrl = this.speedUrl + '002/002/' + this.speedCommandArray[speedCommand];
    console.log(fullUrl);

    this.requestSender(fullUrl);
  }
}
