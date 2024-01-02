import { DynamicFile } from "./DynamicFiles";

const dynamicFile = new DynamicFile("src/components/Nav.tsx");

dynamicFile.addStringBlockBeforeMarker(
	`</ul>`,
	`\t\t\t<li><NavLink to="/reports888">Reports888</NavLink></li>`
);
dynamicFile.debug();
