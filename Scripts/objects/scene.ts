module object{
    export class Scene extends createjs.Container{
        //Instance Variables

        //public properties
        public assetManager;

        //Constructor
        constructor(assetManager: createjs.LoadQueue){
            super();
            this.assetManager = assetManager;
        }
        

        //private methods

        //Public Methods

        public Start():void{

        }

        public Update():void{

        }
    }
}