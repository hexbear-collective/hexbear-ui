import { GetSiteResponse } from "lemmy-js-client";
import { setupMarkdown } from "../../markdown";
import { UserService } from "../../services";

export default function initializeSite(
  site?: GetSiteResponse,
  is_server = false
) {
  UserService.Instance.myUserInfo = site?.my_user;
  if (site) {
    //setupEmojiDataModel(site.custom_emojis ?? []);
  }
  setupMarkdown(is_server);
}
