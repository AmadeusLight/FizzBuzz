const ExplorerController = require("../../lib/controllers/ExplorerController");


describe("Unit Tests Explorer Controller ", () => {
    test("1) Filter Explorers By Mission", () => {

        const explorersInNode = ExplorerController.filterByMision("node");

        expect(explorersInNode.length).toBe(10);


    });

    test("2) Amount Of Explorers By Mission", () => {

        const numberOfExplorerInNode = ExplorerController.getAmountOfExplorersByMission("node");

        expect(numberOfExplorerInNode).toBe(10);
    });

    test("3) Explorers Usernames By Mission ", () => {

        const explorersUsername = ExplorerController.getExplorersUsernamesByMission("node");

        expect(explorersUsername).not.toBe("");
    });

});