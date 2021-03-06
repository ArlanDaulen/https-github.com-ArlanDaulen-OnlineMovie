import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private adventure: any[] = [
    {id: 1, name: "Годзилла(2014)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607501640-159682901.jpg"},
    {id: 2, name: "Безумные начала(2019)", url: "https://kinogo-net.org/v7/uploads/posts/2020-11/1606124570-1051241304.jpg"},
    {id: 3, name: "Наруто: Ураганные хроники (2007)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607417023-1625721255.jpg"},
    {id: 4, name: "Солдатики (1998)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607416559-1921628830.jpg"},
    {id: 5, name: "127 часов (2010)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607414992-93937300.jpg"},
    {id: 6, name: "Небесный замок Лапута (1986)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336033-1168839252.jpg"},
    {id: 7, name: "Секретная служба Санта-Клауса (2011)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607335162-875601888.jpg"},
    {id: 8, name: "Рэмбо: Первая кровь 2 (1985)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607416028-968984351.jpg"},
    {id: 9, name: "Игра Эндера (2013)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1606977131-1363540319.jpg"}
  ]
  private action: any[] = [
    {id: 1, name: 'Ярость (2014)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502240-1567320575.jpg"},
    {id: 2, name: 'Ярость (2014)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502066-1084993394.jpg"},
    {id: 3, name: 'Крепкий орешек (1988)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607501949-1767018572.jpg"},
    {id: 4, name: 'Бронсон (2008)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607501743-675637848.jpg"},
    {id: 5, name: 'Годзилла (2014)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607501640-159682901.jpg"},
    {id: 6, name: 'Последний рубеж (2013)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607500428-1053222260.jpg"},
    {id: 7, name: 'Пандора (2019)', url: "https://kinogo-net.org/v7/uploads/posts/2020-11/1604495568-992935312.jpg"},
    {id: 8, name: 'Чужая стая (2019)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/thumbs/1606799955_610x900_42611.jpg"},
    {id: 9, name: 'Эль Сид (2020)', url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607500361-1086252345.jpg"}
  ]
  private horror: any[] = [
    {id: 1, name: "Террор (2018)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502647-1520407549.jpg"},
    {id: 2, name: "Интервью с вампиром (1994)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607500764-468549532.jpg"},
    {id: 3, name: "Снова в школу (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607417324-1698711603.jpg"},
    {id: 4, name: "Антихрист (2009)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607417162-1527966154.jpg"},
    {id: 5, name: "Эффект Лазаря (2013)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336423-1226024257.jpg"},
    {id: 6, name: "Что скрывает вода (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607335843-604494018.jpg"},
    {id: 7, name: "Суперстранные дела (2019)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607334941-2030174348.jpg"},
    {id: 8, name: "Дичь (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-10/1603177237-1385647034.jpg"},
    {id: 9, name: "Я слышу голоса (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-11/1606742700-638640782.jpg"},
  ]
  private comedy: any[] = [
    {id: 1, name: "Неспящие в Сиэттле (1993)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502587-1298291859.jpg"},
    {id: 2, name: "Адаптация (2002)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502301-1698031568.jpg"},
    {id: 3, name: "И тут он открывает глаза (2018)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502179-1913163301.jpg"},
    {id: 4, name: "Маска (1994)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607500289-1430212636.jpg"},
    {id: 5, name: "Декретный отрыв (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/thumbs/1607419051_610x900_42749.jpg"},
    {id: 6, name: "Навыки выживания (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607418700-100825346.jpg"},
    {id: 7, name: "Плохой Санта (2003)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607415362-1648550058.jpg"},
    {id: 8, name: "Чего хотят мужчины (2019)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607416338-127848892.jpg"},
    {id: 9, name: "Привет семье! (2005)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607415660-1003690179.jpg"}
  ]
  private detective: any[] = [
    {id: 1, name: "Частные сыщики (2016)", url: "https://kinogo-net.org/v7/uploads/posts/2020-11/1604494906-572836834.jpg"},
    {id: 2, name: "Братья Харди (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607090707-2105398349.jpg"},
    {id: 3, name: "Закон и порядок. Специальный корпус (1999)", url: "https://kinogo-net.org/v7/uploads/posts/2020-02/1581842960-424679453.jpg"},
    {id: 4, name: "Анатомия убийства (2018)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607415496-1006092960.jpg"},
    {id: 5, name: "Волк (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336748-1365671296.jpg"},
    {id: 6, name: "Перевал (2018)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607414824-1858621841.jpg"},
    {id: 7, name: "Что скрывает вода (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607335843-604494018.jpg"},
    {id: 8, name: "Один против всех (2017)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607334794-85377252.jpg"},
    {id: 9, name: "Уондер (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607333785-1374743818.jpg"}
  ]
  private cartoon: any[] = [
    {id: 1, name: "Акудама драйв (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607502414-63583396.jpg"},
    {id: 2, name: "Полное погружение (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607499070-1087053289.jpg"},
    {id: 3, name: "Наруто: Ураганные хроники (2007)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607417023-1625721255.jpg"},
    {id: 4, name: "Сквозь слёзы я притворяюсь кошкой (2020)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607416477-1557824547.jpg"},
    {id: 5, name: "Она видела небо (2019)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336316-2079584363.jpg"},
    {id: 6, name: "Ловцы забытых голосов (2011)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336423-269710227.jpg"},
    {id: 7, name: "За облаками (2004)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336154-927827139.jpg"},
    {id: 8, name: "Небесный замок Лапута (1986)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607336033-1168839252.jpg"},
    {id: 9, name: "Секретная служба Санта-Клауса (2011)", url: "https://kinogo-net.org/v7/uploads/posts/2020-12/1607335162-875601888.jpg"}
  ]

/*  adventuref(){
    return this.adventure
  }

  horrorf(){
    return this.horror
  }

  actionf(){
    return this.action
  }

  comedyf(){
    return this.comedy
  }

  detectivef(){
    return this.detective
  }

  cartoonf(){
    return this.cartoon
  }*/

  getData(){
    return this.http.get('assets/db.json');
  }
}
