import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { HOME_TABS } from "../../app/consts";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          {HOME_TABS.map((tab, i) => (
            <Tab key={i}>{tab.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {HOME_TABS.map((tab) => (
            <TabPanel key={tab.key}>
              <p>{tab.name}</p>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default SideBar;
