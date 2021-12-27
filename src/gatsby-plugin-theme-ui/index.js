import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
	fonts: {
		body: `"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif`
	},
});

export default theme;