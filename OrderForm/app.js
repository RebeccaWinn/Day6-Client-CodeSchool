var app= new Vue({
    el:"#app",
    data:{
        services:[
            {
                name:'Web Development',
                price:300,
                active:true
            },
            {
                name:'Design',
                price:400,
                active:false
            },
            {
                name:'Integration',
                price:250,
                active:false
            },
            {
                name:'Training',
                price:220,
                active:false
            }
        ]
    },

    methods:{
        //onclick event
        //toggle active
        toggleActive:function(service){
            service.active =! service.active;
        }

    },
    computed:{
        total: function(){
            var total=0;
            this.services.forEach(function(service){
                if(service.active){
                    total+= service.price
                }
            });
            return total
        }
        //total each service
        //return total
    }


})