import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Header = ({ blok }: any) => <div {...storyblokEditable(blok)}></div>;

export default Header;
