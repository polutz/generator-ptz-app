import { <%= entity %> } from '<%= domain %>';

function <%= appClassName %>(<%= repositoryVarName %>: I<%= repositoryName %>): I<%= appClassName %>{

    async function save(<%= entityVar %>: I<%= entity %>): Promise<I<%= entity %>> {
        if (!<%= entityVar %>.isValid())
            return Promise.resolve(<%= entityVar %>);

        <%= entityVar %> = await <%= repositoryVarName %>.save(<%= entityVar %>);

        return Promise.resolve(<%= entityVar %>);
    }

    async function find(query, {limit}): Promise<I<%= entity %>[]> {
        return <%= repositoryVarName %>.find(query, { limit });
    }

    async function del(id:string): Promise<Boolean> {
        return <%= repositoryVarName %>.delete(id);
    }
    
    return {
        save,
        find,
        del
    }
}

export default <%= appClassName %>;