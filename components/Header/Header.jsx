import { Image, Text } from "react-native";
import headerImg from "../../assets/logo.png";
import { s } from "./Header.style";
export function Header() {
  return (
    <>
      <Image source={headerImg} style={s.img} resizeMode="contain" />
      <Text style={s.subtitle}>Tu as probablement un truc à faire</Text>
    </>
  );
}
