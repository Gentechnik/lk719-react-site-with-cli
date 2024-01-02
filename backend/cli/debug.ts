import { DynamicFile } from "./DynamicFiles";

const dynamicFile = new DynamicFile("src/components/Nav.tsx");

dynamicFile.addStringBlockBeforeMarker(`</ul>`, `testline`);
dynamicFile.debug();
