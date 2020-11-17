import { createSelector } from "reselect";

export const selectSections = state => state.directory.sections;

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);