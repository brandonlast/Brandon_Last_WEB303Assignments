/*
    Assignment 05
*/

$(document).ready(function () {
    
    class ContentItem {


        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (id === this.id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (category !== null) {
                    this.category = category;
                }
            }
        }
        

        toString() {
            return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h4>${this.name}</h4>
                <p>${this.description}</p>
                <div>${this.category}</div>
            </div>
            `;
        }
    }


    const ContentItems = [
        new ContentItem(0, "John Cena", "You cant see me", "Wrestler"),
        new ContentItem(0, "Jackie Chan", "I do small things. I try to do good things every day", "Actor"),
        new ContentItem(0, "The Rock", "Can you Smell what the rock is cooking?", "Wrestler"),
        new ContentItem(0, "Jim Carrey", "B-E-A-utiful." , "Actor"),
        new ContentItem(0, "Taylor Swift", "No matter what happens in life, be good to people" , "Musician"),
    ];

    const $contentItemList = $("#content-item-list");
    ContentItems.forEach(item=> {
        $contentItemList.append(item.toString());
    });
    $(".content-item-wrapper").css({
        border: "2px solid",
        width: "400px",
        padding: "5px",
        margin: "10px",
    });

});


