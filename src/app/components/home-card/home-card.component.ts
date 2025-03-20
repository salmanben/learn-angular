import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LucideAngularModule, WavesLadder, Bed, Bath, MapPin } from "lucide-angular";
import { HomeType } from "../../models/home-type";
@Component({
  selector: "app-home-card",
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.css"],
})
export class HomeCardComponent {
  @Input() home!: HomeType;
  readonly wavesLadderIcon = WavesLadder;
  readonly bedIcon = Bed;
  readonly bathIcon = Bath;
  readonly mapPinIcon = MapPin;
}