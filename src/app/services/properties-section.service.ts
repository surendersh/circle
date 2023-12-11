import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesSectionService {

  agenctLists:any = [
    {
      name:"List your property",
      details:"You can list your property, manage inquiries, and even conduct virtual tours while buyers can explore properties in your own comfort.",
      imgUrl: 'assets/list.png'    
    },
    {
      name:"Wider Reach",
      details:"We provide access to a global audience, expanding your property's exposure. This broad reach increases the chances of finding the right buyer quickly.",
      imgUrl: 'assets/wider.png'    
    },
    {
      name:"Cost-Effective",
      details:"We are more cost-effective than traditional advertising methods. You can save on printing and distribution costs.",
      imgUrl: 'assets/cost-effective.png'    
    },
    {
      name:"Rich Media",
      details:"We will showcase your property using high-quality photos, videos, virtual tours, and interactive floor plans.",
      imgUrl: 'assets/rich-media.png'    
    },
    {
      name:"Real-Time Updates",
      details:"Online listings can be updated instantly, allowing you to adjust property details, pricing, or availability as needed.",
      imgUrl: 'assets/real-time.png'    
    },
    {
      name:"Convenience",
      details:"Our smart dash board has user friendly interface with advanced technology features",
      imgUrl: 'assets/conventince.png'    
    }
  ]
  constructor() { }

  getAgencyList() {
    return this.agenctLists;
  }
}
