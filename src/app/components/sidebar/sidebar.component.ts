import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    id: number;
}

declare interface Childinfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  parentid: number;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' , id: 1},
    { path: '/user-profile', title: 'Users',  icon: 'person', class: '' , id: 2},
    { path: '/table-list', title: 'Series',  icon: 'emoji_events', class: '' , id: 3},
    { path: '/typography', title: 'Default Contest',  icon: 'list_alt', class: '' , id: 4},
    { path: '/icons', title: 'Content Type',  icon: 'mediation', class: '' , id: 5},
    { path: '/maps', title: 'Document Verification',  icon: 'contact_phone', class: 'mapcls' , id: 6},
    { path: '/notifications', title: 'Transaction History',  icon: 'receipt_long', class: '' , id: 7},
    { path: '/notifications', title: 'Receipt',  icon: 'receipt', class: '' , id: 8},
    { path: '/demo', title: 'Promotions',  icon: 'campaign', class: '', id: 9 }
];

export const CHILDROUTE: Childinfo[] = [
  { path: '/demo', title: 'Upcomming Matches',  icon: 'arrow_forward', class: '', parentid: 3 },
  { path: '/demo', title: 'Live Matches',  icon: 'arrow_forward', class: '', parentid: 3 },
  { path: '/demo', title: 'Completed Matches',  icon: 'arrow_forward', class: '', parentid: 3 },
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  childItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
   this.childItems = CHILDROUTE.filter(childItem => childItem);
   $('.mapcls').on('click',(e) => {
    
   });
  }

  

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
