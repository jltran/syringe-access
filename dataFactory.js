;(function(){
    
    angular.module('reviewData', [])
        .factory('reviews', function(){
            var data = 
                [
                    {
                        "id": 0001,
                        "name": "Elmhurst Pharmacy",
                        "address": "7400 MacArthur Blvd. Oakland",
                        "phone": "638-9851",
                        "reviews": [
                            {
                                "reviewer": "Orlando Chavez",
                                "stars": "4",
                                "impression": "Lorem ipsum dolor sit amet."
                            },
                            {
                                "reviewer": "Caroline Davidson",
                                "stars": "3",
                                "impression": "Sit laborum eaque corrupti reprehenderit!"
                            }
                        ]
                    },
                    {
                        "id": 0002,
                        "name": "CVS",
                        "address": "4349 San Pablo @ 45th, Emeryville",
                        "phone": "653-0526",
                        "reviews": [
                            {
                                "reviewer": "Jason Tran",
                                "stars": "3",
                                "impression": "Quam, nesciunt, exercitationem. Rerum, tenetur."
                            }
                        ]
                    },
                    {
                        "id": 0003,
                        "name": "CVS",
                        "address": "2300 Shattuck @ Bancroft, Berkeley",
                        "phone": "549-4265",
                        "reviews": [
                            {
                                "reviewer": "Julia Klems",
                                "stars": "5",
                                "impression": "Voluptatibus praesentium alias consectetur nisi!"
                            }
                        ]
                    }
                ];
                return data;
            });
    
})();