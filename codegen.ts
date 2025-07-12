import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: [
		{
			'http://localhost:8055/graphql': {
				headers: {
					Authorization: 'Bearer TGXoN-nNMLlwBK6N6M-SFz7hz9cuR306'
				}
			}
		}
	],
	documents: ['src/lib/api/**/*.ts'],
	ignoreNoDocuments: true,
	generates: {
		'./src/graphql/': {
			preset: 'client',
			config: {
				useTypeImports: true,
				documentMode: 'string'
			}
		}
	}
};

export default config;
