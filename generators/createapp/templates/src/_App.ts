import { <%= entity %>, I<%= entity %>, I<%= appClassName %> } from '<%= domain %>';

function <%= appClassName %>(<%= repositoryVarName %>: I<%= repositoryName %>): I<%= appClassName %> {

    async function save(<%= entityVar %>: I<%= entity %>): Promise<I<%= entity %>> {
        <%= entityVar %> = new <%= entity %>(<%= entityVar %>);

        if (!<%= entityVar %>.isValid())
            return Promise.resolve(<%= entityVar %>);

        var <%= entityVar %>Db = await <%= repositoryVarName %>.getById(<%= entityVar %>.id);

        if(<%= entityVar %>Db)
            <%= entityVar %> = <%= entityVar %>Db.update(new <%= entity %>(<%= entityVar %>));

        <%= entityVar %> = await <%= repositoryVarName %>.save(<%= entityVar %>);

        return Promise.resolve(<%= entityVar %>);
    }

    function find(query, {limit}) {
        return <%= repositoryVarName %>.find(query, { limit });
    }

    function remove(){

    }

    return {
        save,
        find,
        remove
    }
}

export default <%= appClassName %>;
