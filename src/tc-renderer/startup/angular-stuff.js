import '../ng/app';
import '../ng/on-load/main.controller';

import '../ng/on-load/eager-load-providers.run';

import '../ng/elements/login/login';
import '../ng/elements/settings-panel/settings-panel';
import '../ng/elements/side-toolbar/side-toolbar';
import '../ng/elements/chat-input/chat-input';
import '../ng/elements/chat-output/chat-output';
import '../ng/elements/chat-tabs/chat-tabs';
import '../ng/elements/user-panel/user-panel';
import '../ng/elements/thumbnail/thumbnail';
import '../ng/elements/chatters/chatters';
import '../ng/elements/chatters-tabs/chatters-tabs';
import '../ng/elements/add-channel/add-channel';

import '../ng/providers/electron';
import '../ng/providers/settings';
import '../ng/providers/open-external';
import '../ng/providers/session';
import '../ng/providers/manifest';
import '../ng/providers/tmi';
import '../ng/providers/irc';
import '../ng/providers/api';
import '../ng/providers/emotes-ffz';
import '../ng/providers/emotes-bttv';
import '../ng/providers/emotes-twitch';
import '../ng/providers/lodash';
import '../ng/providers/channels';
import '../ng/providers/messages';
import '../ng/providers/highlights';
import '../ng/providers/notifications';
import '../ng/providers/settings-gui';
import '../ng/providers/colors';

import '../ng/managers/title-manager.provider';
import '../ng/managers/tray-icon';
import '../ng/managers/zoom-manager.provider';
import '../ng/managers/auto-updater.provider';

import '../ng/filters/strip-hash';
import '../ng/filters/emotify';
import '../ng/filters/ffzfy';
import '../ng/filters/bttvfy';
import '../ng/filters/linkify';
import '../ng/filters/escape';
import '../ng/filters/combine';
import '../ng/filters/capitalize';
import '../ng/filters/pretty-chatter-type';

import '../ng/attributes/tab-completion.directive';
import '../ng/attributes/href-external.directive';
import '../ng/attributes/auto-focus.directive';
import '../ng/attributes/bind-html-compile.directive';