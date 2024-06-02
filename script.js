var row = 3;
var cols = 3;

var currTile ;
var otherTile;

var imgOrder = ["7","4","9","8","5","2","6","3","1"];

window.onload = function(){
    for(let r=0; r<row; r++){
        for(let c=0; c<cols; c++){

          
// ====== creating img tag ======= 
            let tile = document.createElement("img");
// ======= generating id ====== 
            tile.id = r.toString() + "-" + c.toString();
            
// ======== generating src for all ======== 
            tile.src = imgOrder.shift() + ".jpg";
// ========== DRAGING FUNCTIONALITY ======== 
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

          

// ================ function call ============= 
            function dragStart(){
                currTile = this;
            }
            function dragOver(e){
                e.preventDefault();
            }
            function dragEnter(e){
                e.preventDefault();
            }
            function dragLeave(){
                
            }
            function dragDrop(){
                otherTile = this;
            }
            function dragEnd(){

                if(!otherTile.src.includes("1.jpg")){
                    return;
                }

            let currCords = currTile.id.split("-");
                    let r = parseInt(currCords[0]);
                    let c = parseInt(currCords[1]);

            let otherCords = otherTile.id.split("-");
                    let r2 = parseInt(otherCords[0]);
                    let c2 = parseInt(otherCords[1]);

            let moveLeft = r == r2 && c2 == c-1;
            let moveRight = r == r2 && c2 == c+1;
            
            let moveUp = c == c2 && r2 == r-1;
            let moveDown = c== c2 && r2 == r+1;

            let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

            if(isAdjacent){

                let currImg = currTile.src;
                let otherImg = otherTile.src;

                currTile.src = otherImg;
                otherTile.src = currImg;
                
            }
            }

// ========== append img in board ========= 
            document.getElementById("board").append(tile);


        }

    }

} 