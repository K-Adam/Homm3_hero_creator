import { SpecialtyLevel } from "./specialty";

export interface SpecialtyContent {
  [SpecialtyLevel.One]: string;
  [SpecialtyLevel.Four]: string;
  [SpecialtyLevel.Six]: string;
}

export const specialtyContentExample = {
  [SpecialtyLevel.One]: `:instant: Your selected unit gains +1 :attack:.
:or:
:instant: Your selected unit gains +1 :defense:.
 
This effect **doubles** for the
Evil Eyes unit.`,
  [SpecialtyLevel.Four]: `:activation: The selected unit suffers:
:spell{{0;1;2};{1;2;3};{:damage:}}:`,
  [SpecialtyLevel.Six]: `Put this card on the Pack of Evil Eyes Unit card; it replaces the card's statistic.
When this specialty card's :health: drops to 0, discard it.
# Horde of Evil Eyes
:stats{3;1;2;6}:`,
};
