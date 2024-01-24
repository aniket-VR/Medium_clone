
export default function getUserChoose() :String[]{
   const defaultChoose:String[] =["For You","Following"];
   const userChoose:String [] =["Data Science","Bussines","Money","Programming"];
   return defaultChoose.concat(userChoose);
}
