var app = new Vue(
    {
        el: "#root",
        data: {
            images: ["https://images.photowall.com/products/42556/summer-landscape-with-river.jpg?h=699&q=85",

            "https://media-exp1.licdn.com/dms/image/C561BAQGEbvT3SFyR9Q/company-background_10000/0/1582050035728?e=2159024400&v=beta&t=xwPLRsVBBNXQQS3HN3q7hsYXmt6JxJsH6lpnbh9Y1ko",

            "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg",

            "https://static.educalingo.com/img/en/800/landscape.jpg"
            ],
            imageIndex: 0
        },
        methods: {
            nextImage: function() {
                this.imageIndex++;
                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }

            },
            prevImage: function() {
                this.imageIndex--;
                if (this.imageIndex == -1) {
                    this.imageIndex = this.images.length -1;
                }
            }
        }
    }
)