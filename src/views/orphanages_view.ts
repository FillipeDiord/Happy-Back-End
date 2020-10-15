import Orphanage from '../models/Orphanage';
import imagensView from './images_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      imagens: imagensView.renderMany(orphanage.images)
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(Orphanage => this.render(Orphanage));
  }
};