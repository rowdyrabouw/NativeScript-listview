import {Injectable} from "@angular/core";

import {Item} from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        {
            id: 1,
            title: "Cat",
            text: "The domestic cat (Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
            isVisible: false
        }, {
            id: 2,
            title: "Dog",
            text: "The domestic dog (Canis lupus familiaris or Canis familiaris) is a member of genus Canis (canines) that forms part of the wolf-like canids, and is the most widely abundant carnivore. The dog and the extant gray wolf are sister taxa, with modern wolves not closely related to the wolves that were first domesticated.",
            isVisible: false
        }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
