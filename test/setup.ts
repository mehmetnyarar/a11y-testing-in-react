import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import "./mocks/next";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
