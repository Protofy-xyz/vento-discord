import { ListItems } from 'protolib/components/ListItems';
import { TotalItems } from 'protolib/components/TotalItems';
import { GroupModel } from './groupsSchemas';
import { Tag } from 'lucide-react';

export const ListGroups = ({ title, id }) => (
    <ListItems
        title={title}
        id={id}
        fetchFunc='/api/core/v1/groups'
        model={GroupModel}
        displayFields={[
            { label: "name", field: "name" },
            { label: "admin", field: "admin" },
            { label: "workspaces", field: "workspaces" },
        ]}
    />
);

export const TotalGroups = ({ title, id }) => (
    <TotalItems
        title={title}
        id={id}
        fetchFunc="/api/core/v1/groups"
        model={GroupModel}
        icon={Tag}
        link="./groups"
    />
);