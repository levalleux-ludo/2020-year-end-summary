import { DCL_PICTIONARY } from './projects/dcl_pictionary_circus';
import { DEFIVENTURE } from './projects/defi-venture';
import { CRYPTOFANTASIA } from './projects/crypto-fantasia';
import { PLOT } from './projects/plot';
import { DECENTRADOCS } from './projects/decentradocs';
import { POLLUS } from './projects/pollus';
import { DCL_RACING_KART } from './projects/dcl_racing_kart';
import { AVC_ROOM_BOOKING } from './projects/avc_room_booking';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
  image: string;
  markdown: string;
}

const BANNER_RATIO = 1919/278;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'year-end-summary';
  toolbarHeight = 100;
  projects = [
    DECENTRADOCS,
    CRYPTOFANTASIA,
    DEFIVENTURE,
    DCL_PICTIONARY,
    DCL_RACING_KART,
    POLLUS,
    PLOT,
    AVC_ROOM_BOOKING,
  ];
  STACK_IMAGES = {
    android: {img: 'assets/stack/android.png', tooltip: 'Mobile App for Android devices'},
    angular: {img: 'assets/stack/angular.png', tooltip: 'Front-end built with Angular CLI'},
    arweave: {img: 'assets/stack/arweave.png', tooltip: 'Featuring Arweave Permanent Storage (Permaweb)'},
    aws: {img: 'assets/stack/aws.png', tooltip: 'Deployed on AWS (ECS + S3)'},
    blender: {img: 'assets/stack/blender.png', tooltip: '3D modelling with Blender'},
    buidler: {img: 'assets/stack/buidler.png', tooltip: 'Smart Contracts developed with Buidler.dev'},
    dcl: {img: 'assets/stack/dcl.png', tooltip: '3D Scene built with Decentraland SDK'},
    discord: {img: 'assets/stack/discord.png', tooltip: 'Built with Discord DSK'},
    docker: {img: 'assets/stack/docker.png', tooltip: 'Deployed as Docker containers'},
    eth: {img: 'assets/stack/eth.png', tooltip: 'Deployed on Ethereum Blockchain'},
    matic: {img: 'assets/stack/matic.png', tooltip: 'Deployed on MATIC Blockchain'},
    mongodb: {img: 'assets/stack/mongodb.png', tooltip: 'Feature MongoDB Database'},
    near: {img: 'assets/stack/near.png', tooltip: 'Deployed on NEAR Blockchain'},
    nginx: {img: 'assets/stack/nginx.png', tooltip: 'Network Routing with NGinx'},
    node_ts: {img: 'assets/stack/node_ts.png', tooltip: 'Developed with Node.JS and Typescript'},
    react_native: {img: 'assets/stack/dcl.png', tooltip: 'Developed with React Native'},
    smartpy: {img: 'assets/stack/smartpy.png', tooltip: 'Smart Contracts Developed with SmartPY'},
    solidity: {img: 'assets/stack/solidity.png', tooltip: 'Smart Contract Implemented in Solidity'},
    tezos: {img: 'assets/stack/tezos.png', tooltip: 'Deployed on TEZOS Blockchain'},
    torus: {img: 'assets/stack/torus.png', tooltip: 'Featuring Torus Wallet'},
    truffle: {img: 'assets/stack/truffle.png', tooltip: 'Smart Contracts developed with Truffle'},
    typescript: {img: 'assets/stack/typescript.png', tooltip: 'Implemented in Typescript'},
  }
  @ViewChild('content', {static: true})
  content: ElementRef;
  constructor(
    private hostElement: ElementRef
  ) {
    // this.toolbarHeight = this.hostElement.nativeElement.innerWidth / BANNER_RATIO;
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    console.log("ngOnInit", this.content.nativeElement.clientWidth);
    this.toolbarHeight = this.content.nativeElement.clientWidth / BANNER_RATIO;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log("onResize event", this.content.nativeElement.clientWidth);
    this.toolbarHeight = this.content.nativeElement.clientWidth / BANNER_RATIO;
  }
  // @HostListener('window:load', ['$event'])
  // onLoad(event) {
  //   console.log("onLoad event", this.content.nativeElement.clientWidth);
  //   this.toolbarHeight = this.content.nativeElement.clientWidth / BANNER_RATIO;
  // }

}
