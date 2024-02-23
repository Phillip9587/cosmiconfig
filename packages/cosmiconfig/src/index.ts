import type {
  Options,
  OptionsSync,
  PublicExplorer,
  PublicExplorerSync,
} from '@cosmiconfig/core';
import {
  createPublicExplorer,
  createPublicExplorerSync,
} from '@cosmiconfig/core';
import {
  defaultGlobalConfigSearchPlaces,
  defaultGlobalConfigSearchPlacesSync,
  defaultLoaders,
  defaultLoadersSync,
  defaultMetaSearchPlaces,
  defaultMetaSearchPlacesSync,
  getDefaultSearchPlaces,
  getDefaultSearchPlacesSync,
} from './defaults';

export {
  defaultLoaders,
  defaultLoadersSync,
  getDefaultSearchPlaces,
  getDefaultSearchPlacesSync,
  defaultGlobalConfigSearchPlaces as globalConfigSearchPlaces,
  defaultGlobalConfigSearchPlacesSync as globalConfigSearchPlacesSync,
};

export type {
  CommonOptions,
  Config,
  CosmiconfigResult,
  Loader,
  LoaderResult,
  LoaderSync,
  Loaders,
  LoadersSync,
  Options,
  OptionsSync,
  PublicExplorer,
  PublicExplorerBase,
  PublicExplorerSync,
  SearchStrategy,
  Transform,
  TransformSync,
} from '@cosmiconfig/core';

export function cosmiconfig(
  moduleName: string,
  options: Readonly<Partial<Options>> = {},
): PublicExplorer {
  return createPublicExplorer(moduleName, options, {
    globalConfigSearchPlaces: defaultGlobalConfigSearchPlaces,
    metaSearchPlaces: defaultMetaSearchPlaces,
    loaders: defaultLoaders,
    searchPlaces: getDefaultSearchPlaces(moduleName),
  });
}

export function cosmiconfigSync(
  moduleName: string,
  options: Readonly<Partial<OptionsSync>> = {},
): PublicExplorerSync {
  return createPublicExplorerSync(moduleName, options, {
    globalConfigSearchPlaces: defaultGlobalConfigSearchPlacesSync,
    metaSearchPlaces: defaultMetaSearchPlacesSync,
    loaders: defaultLoadersSync,
    searchPlaces: getDefaultSearchPlacesSync(moduleName),
  });
}
