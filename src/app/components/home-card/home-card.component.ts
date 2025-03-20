import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LucideAngularModule, WavesLadder, Bed, Bath, MapPin, Heart } from "lucide-angular";
import { Home } from "../../models/home-type";
@Component({
  selector: "app-home-card",
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.css"],
})
export class HomeCardComponent {
  @Input() home!: Home;
  @Output() toggleFavorite = new EventEmitter<number>();

  readonly wavesLadderIcon = WavesLadder;
  readonly bedIcon = Bed;
  readonly bathIcon = Bath;
  readonly mapPinIcon = MapPin;
  readonly Heart = Heart;

  /**
   * Emit the home id when favorite is toggled
   */
  onFavoriteClick(): void {
    if (this.home.id) {
      this.toggleFavorite.emit(this.home.id);
    }
  }
}