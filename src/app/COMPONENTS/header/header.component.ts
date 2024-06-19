import { Component } from '@angular/core';
import {NgOptimizedImage, NgTemplateOutlet} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatRipple} from "@angular/material/core";
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    MatRipple,
    MatButton,
    MatMenu,
    MatMenuTrigger,
    NgTemplateOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
