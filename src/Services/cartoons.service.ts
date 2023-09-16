import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICartoon } from 'src/Models/icartoon';

@Injectable({
  providedIn: 'root'
})
export class CartoonsService {


  cartoons:ICartoon[] = [
    {
      id:1,
      Name:"3ahd l asdeqaa2",
      Desc:"is an engaging drama cartoon that revolves around the lives of a group of close friends as they navigate the ups and downs of friendship, love, and personal growth. The series explores the challenges and triumphs of these characters, making it a heartwarming and relatable watch for viewers of all ages",
      type:"Drama Cartoon",
      imgSrc:"assets/images/3.jpg",
      display:"none"
    },
    {
      id:2,
      Name:"digimon",
      Desc:"is a captivating drama cartoon that follows a group of young adventurers who are transported to a digital world filled with powerful creatures known as Digimon. Together, they embark on exciting journeys, face formidable foes, and forge unbreakable bonds with their Digimon companions. This series is a thrilling adventure that combines action, friendship, and the quest for self-discovery.",
      type:"Drama Cartoon",
      imgSrc:"assets/images/digimon.jpg",
      display:"none"
    },
    {
      id:3,
      Name:"Emily",
      Desc:"Emily is a touching drama cartoon that tells the story of a young girl named Emily and her adventures as she learns valuable life lessons. Through her experiences, viewers are taken on an emotional journey filled with heartwarming moments, making this series a heartfelt and inspiring watch.",
      type:"Drama Cartoon",
      imgSrc:"assets/images/em.jpg",
      display:"none"
    },
    {
      id:4,
      Name: "The Secret Garden",
    Desc: "The Secret Garden is a captivating animated series that brings to life the classic novel by Frances Hodgson Burnett. It follows the journey of Mary Lennox, a young girl who discovers a hidden, magical garden within her uncle's estate. As she tends to the garden and nurtures its wonders, she undergoes a remarkable transformation, uncovering the healing power of nature and friendship. This series is a heartwarming tale of growth, discovery, and the enchantment of the natural world.",
    type: "Drama Cartoon",
      imgSrc:"assets/images/l 7deqa.jpg",
      display:"none"
    },
    {
      id:5,
      Name: "Conan",
      Desc: "Conan, also known as Detective Conan, is an action-packed anime series that follows the adventures of a young and brilliant detective named Conan Edogawa. After a mysterious incident, he finds himself in the body of a child. Determined to uncover the truth behind his transformation and solve challenging cases, Conan's journey is filled with suspense, intrigue, and thrilling mysteries.",
      type: "Mystery Cartoon",
      imgSrc:"assets/images/konan.jpg",
      display:"none"
    },
    {
      id:6,
      Name: "L Ramya l Moltheba",
      Desc: "L Ramya l Moltheba is a drama cartoon that takes viewers on a captivating journey through the experiences and challenges faced by its characters. With drama and emotional depth, this series explores the intricacies of human relationships and personal growth.",
      type: "Drama Cartoon",
      imgSrc:"assets/images/r.jpg",
      display:"none"
    },
    {
      id: 7,
      Name: "Pokemon",
      Desc: "Pokemon is a beloved adventure anime series that follows the adventures of Ash Ketchum and his friends as they travel the world, capture creatures known as Pokemon, and compete in battles. The series promotes themes of friendship, teamwork, and the bond between trainers and their Pokemon.",
      type: "Adventure Cartoon",
      imgSrc: "assets/images/polemon.jpg",
      display: "none"
    },
    {
      id:8,
      Name: "Adnan and Lena",
      Desc: "Adnan and Lena is an animated series that follows the adventures of two siblings, Adnan and Lena, as they embark on various exciting journeys filled with mysteries and challenges. Along the way, they learn valuable life lessons, teamwork, and the importance of family bonds. It's a heartwarming and adventurous series suitable for all ages.",
      type: "Adventure Cartoon",
      imgSrc:"assets/images/adnan.jpg",
      display:"none"
    },
    {
      id: 9,
      Name: "Drob Remy",
      Desc: "Drob Remy is an adventure-filled animated series that takes viewers on a thrilling journey through different landscapes and environments. Join Remy and his companions as they explore the unknown, face obstacles, and discover the beauty of the world around them. This series offers excitement and exploration for young viewers.",
      type: "Adventure Cartoon",
      imgSrc: "assets/images/drobremy.jpg",
      display: "none"
    },
    {
      id:10,
      Name: "Al Qannas",
      Desc: "Al Qannas is a drama cartoon that revolves around the experiences and challenges faced by its characters. With emotional depth and compelling storytelling, it delves into themes of justice, morality, and personal growth. This series provides a thought-provoking and engaging narrative.",
      type: "Drama Cartoon",
      imgSrc:"assets/images/th.jpg",
      display:"none"
    },
    {
      id:11,
      Name: "Do Re Mi Fa",
      Desc: "Do Re Mi Fa is an enchanting musical drama cartoon that follows the adventures of four friends who discover a magical world of music. Each episode explores a unique musical theme and teaches valuable life lessons through the power of song and melody. It's a delightful and educational series for young viewers.",
      type: "Musical Drama Cartoon",
      imgSrc:"assets/images/doremy.jpg",
      display:"none"
    },
    {
      id:12,
      Name: "Dragon Ball",
      Desc: "Dragon Ball is a legendary anime series that has captivated audiences worldwide. It chronicles the epic adventures of Goku and his companions as they embark on a quest to collect the powerful Dragon Balls and face formidable foes. Known for its intense battles and iconic transformations, Dragon Ball is a cornerstone of the anime genre.",
      type: "Action Adventure Cartoon",
      imgSrc:"assets/images/dragon.jpg",
      display:"none"
    },
    {
      id:13,
      Name: "One Piece",
      Desc: "One Piece is a thrilling adventure anime that follows the adventures of Monkey D. Luffy and his crew as they search for the ultimate treasure known as One Piece. Along the way, they encounter pirates, marines, and mythical creatures, all while exploring themes of friendship, freedom, and dreams. With its epic storytelling and memorable characters, One Piece is a must-watch for anime enthusiasts.",
      type: "Adventure Cartoon",
      imgSrc:"assets/images/onepeice.jpg",
      display:"none"
    },
    {
      id:14,
      Name:"Naruto",
      Desc: "Naruto is a highly acclaimed anime series that follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and earning the title of Hokage. Along the way, he faces formidable adversaries, forms deep bonds with friends, and unravels the mysteries of his past. The series is known for its epic battles, character development, and exploration of themes like perseverance and friendship.",
      type:"Drama Cartoon",
      imgSrc:"assets/images/Naruto.jpg",
      display:"none"
    },
    {
      id:15,
      Name:"Ana w Akhy",
      Desc: "Ana w Akhy is an Egyptian animated series that revolves around the adventures and challenges faced by two siblings, Ana and her brother. Through their experiences, the show provides valuable life lessons and explores the importance of family bonds and unity. It's a heartwarming and relatable series suitable for all ages.",
      type:"Drama Cartoon",
      imgSrc:"assets/images/a.jpg",
      display:"none"
    },
    {
      id:16,
      Name:"domtom salmeen",
      Desc: "Domtom Salmeen is a comedy animated series known for its humor and entertaining episodes. The show features the comical misadventures of Domtom and his friends as they navigate various humorous situations. It's a lighthearted series that guarantees laughs and fun for its viewers.",
      type:"Drama Cartoon",
      imgSrc:"assets/images/domtom.jpg",
      display:"none"
    },
  ];

  constructor() { }

  getAllCartoons(): Observable<ICartoon[]> {
    return of(this.cartoons);
  }

  // getCartoonByID(id: number): Observable<ICartoon | undefined> {
  //   const cartoon = this.cartoons.find(c => c.id === id);
  //   return of(cartoon);
  // }
  getCartoonByID(id: number){
    return this.cartoons.find(c => c.id === id);

  }
}
