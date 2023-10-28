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
            if (this.id === id) {
                if (name !== null) this.name = name;
                if (description !== null) this.description = description;
                if (category !== null) this.category = category;
            }
        }
    
        toString() {
            return `
                <div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>
            `;
        }
    }
    
    const contentItems = [
        new ContentItem(0, "Item 1", "Description 1", "Category A"),
        new ContentItem(1, "Item 2", "Description 2", "Category B"),
        new ContentItem(2, "Item 3", "Description 3", "Category C"),
        new ContentItem(3, "Item 4", "Description 4", "Category D"),
        new ContentItem(4, "Item 5", "Description 5", "Category E")
    ];
    
    $(document).ready(function () {
        // Set the theme title
        const themeTitle = $('#content h2');
        themeTitle.text("Welcome to E Corp."); 
    
        // Populate content items
        const contentList = $('#content-item-list');
        contentItems.forEach(item => {
            contentList.append(item.toString());
        });
    });
    

});


